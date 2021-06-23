/*
 * **** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is part of dcm4che, an implementation of DICOM(TM) in
 * Java(TM), hosted at https://github.com/dcm4che.
 *
 * The Initial Developer of the Original Code is
 * J4Care.
 * Portions created by the Initial Developer are Copyright (C) 2015-2019
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 * See @authors listed below
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * **** END LICENSE BLOCK *****
 *
 */

package org.dcm4chee.arc.qmgt.impl;

import org.dcm4che3.data.Attributes;
import org.dcm4che3.net.Device;
import org.dcm4che3.net.service.QueryRetrieveLevel2;
import org.dcm4chee.arc.conf.ArchiveDeviceExtension;
import org.dcm4chee.arc.conf.QueueDescriptor;
import org.dcm4chee.arc.conf.StorageVerificationPolicy;
import org.dcm4chee.arc.conf.TaskProcessorName;
import org.dcm4chee.arc.entity.Task;
import org.dcm4chee.arc.keycloak.HttpServletRequestInfo;
import org.dcm4chee.arc.qmgt.TaskManager;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.json.Json;
import javax.json.stream.JsonGenerator;
import java.io.StringWriter;
import java.util.Date;

/**
 * @author Gunter Zeilinger (gunterze@protonmail.com)
 * @since Jun 2021
 */
@ApplicationScoped
public class TaskManagerImpl implements TaskManager {

    @Inject
    private Device device;

    @Inject
    private TaskManagerEJB ejb;

    @Inject
    private TaskScheduler scheduler;

    @Override
    public boolean schedule(Task task, QueueDescriptor queueDesc) {
        if (!ejb.scheduleTask(task)) return false;
        if (task.getScheduledTime().getTime() <= System.currentTimeMillis()) {
            ArchiveDeviceExtension arcDev = device.getDeviceExtensionNotNull(ArchiveDeviceExtension.class);
            scheduler.process(queueDesc, arcDev.getTaskProcessingFetchSize());
        }
        return true;
    }

    @Override
    public boolean scheduleStgVerTask(String localAET, QueryRetrieveLevel2 qrlevel,
                                      HttpServletRequestInfo httpServletRequestInfo,
                                      String studyInstanceUID, String seriesInstanceUID, String sopInstanceUID,
                                      String batchID, StorageVerificationPolicy storageVerificationPolicy,
                                      Boolean updateLocationStatus, String... storageIDs) {
        ArchiveDeviceExtension arcDev = device.getDeviceExtension(ArchiveDeviceExtension.class);
        QueueDescriptor queueDesc = arcDev.firstQueueOf(TaskProcessorName.STG_VERIFIER);
        Task task = new Task();
        StringWriter sw = new StringWriter();
        try (JsonGenerator gen = Json.createGenerator(sw)) {
            gen.writeStartObject();
            gen.write("LocalAET", localAET);
            gen.write("StudyInstanceUID", studyInstanceUID);
            if (qrlevel != QueryRetrieveLevel2.STUDY) {
                gen.write("SeriesInstanceUID", seriesInstanceUID);
                if (qrlevel == QueryRetrieveLevel2.IMAGE) {
                    gen.write("SOPInstanceUID", sopInstanceUID);
                }
            }
            if (httpServletRequestInfo != null)
                httpServletRequestInfo.writeTo(gen);
            gen.writeEnd();
        }
        task.setDeviceName(device.getDeviceName());
        task.setQueueDescriptor(queueDesc);
        task.setScheduledTime(new Date());
        task.setParameters(sw.toString());
        task.setStatus(Task.Status.SCHEDULED);
        task.setBatchID(batchID);
        task.setLocalAET(localAET);
        task.setStorageVerificationPolicy(storageVerificationPolicy);
        task.setUpdateLocationStatus(updateLocationStatus);
        task.setStorageIDs(storageIDs);
        task.setStudyInstanceUID(studyInstanceUID);
        if (qrlevel != QueryRetrieveLevel2.STUDY) {
            task.setSeriesInstanceUID(seriesInstanceUID);
            if (qrlevel == QueryRetrieveLevel2.IMAGE) {
                task.setSopInstanceUID(sopInstanceUID);
            }
        }
        return schedule(task, queueDesc);
    }

    @Override
    public boolean scheduleStgVerTask(String localAET, String studyInstanceUID, String seriesInstanceUID, String batchID) {
        return scheduleStgVerTask(localAET, QueryRetrieveLevel2.SERIES, null,
                studyInstanceUID, seriesInstanceUID, null,
                batchID, null, null);
    }

    @Override
    public long countScheduledTasksOnThisDevice(String queueName) {
        return ejb.countScheduledTasksOnThisDevice(queueName);
    }

    @Override
    public void resetDiffTask(Task diffTask) {
        ejb.resetDiffTask(diffTask);
    }

    @Override
    public void addDiffTaskAttributes(Task diffTask, Attributes diff) {
        ejb.addDiffTaskAttributes(diffTask, diff);
    }

    @Override
    public void updateDiffTask(Task diffTask, int matches, int missing, int different) {
        ejb.updateDiffTask(diffTask, matches, missing, different);
    }
}
