var DCM4CHE = DCM4CHE || {};
DCM4CHE.SOPClass = (function (dictionary) {
  var nameOf = function (uid) {
    if(uid === "all"){
      return dictionary;
    }else{
      return dictionary[uid] || uid;
    }
  };
  return {
    nameOf:nameOf
  }
}({
"1.2.840.10008.1.1":"Verification SOP Class",
"1.2.840.10008.1.3.10":"Media Storage Directory Storage",
"1.2.840.10008.1.9":"Basic Study Content Notification SOP Class (Retired)",
"1.2.840.10008.1.20.1":"Storage Commitment Push Model SOP Class",
"1.2.840.10008.1.20.2":"Storage Commitment Pull Model SOP Class (Retired)",
"1.2.840.10008.1.40":"Procedural Event Logging SOP Class",
"1.2.840.10008.1.42":"Substance Administration Logging SOP Class",
"1.2.840.10008.3.1.2.1.1":"Detached Patient Management SOP Class (Retired)",
"1.2.840.10008.3.1.2.2.1":"Detached Visit Management SOP Class (Retired)",
"1.2.840.10008.3.1.2.3.1":"Detached Study Management SOP Class (Retired)",
"1.2.840.10008.3.1.2.3.2":"Study Component Management SOP Class (Retired)",
"1.2.840.10008.3.1.2.3.3":"Modality Performed Procedure Step SOP Class",
"1.2.840.10008.3.1.2.3.4":"Modality Performed Procedure Step Retrieve SOP Class",
"1.2.840.10008.3.1.2.3.5":"Modality Performed Procedure Step Notification SOP Class",
"1.2.840.10008.3.1.2.5.1":"Detached Results Management SOP Class (Retired)",
"1.2.840.10008.3.1.2.6.1":"Detached Interpretation Management SOP Class (Retired)",
"1.2.840.10008.5.1.1.1":"Basic Film Session SOP Class",
"1.2.840.10008.5.1.1.2":"Basic Film Box SOP Class",
"1.2.840.10008.5.1.1.4":"Basic Grayscale Image Box SOP Class",
"1.2.840.10008.5.1.1.4.1":"Basic Color Image Box SOP Class",
"1.2.840.10008.5.1.1.4.2":"Referenced Image Box SOP Class (Retired)",
"1.2.840.10008.5.1.1.14":"Print Job SOP Class",
"1.2.840.10008.5.1.1.15":"Basic Annotation Box SOP Class",
"1.2.840.10008.5.1.1.16":"Printer SOP Class",
"1.2.840.10008.5.1.1.16.376":"Printer Configuration Retrieval SOP Class",
"1.2.840.10008.5.1.1.22":"VOI LUT Box SOP Class",
"1.2.840.10008.5.1.1.23":"Presentation LUT SOP Class",
"1.2.840.10008.5.1.1.24":"Image Overlay Box SOP Class (Retired)",
"1.2.840.10008.5.1.1.24.1":"Basic Print Image Overlay Box SOP Class (Retired)",
"1.2.840.10008.5.1.1.26":"Print Queue Management SOP Class (Retired)",
"1.2.840.10008.5.1.1.27":"Stored Print Storage SOP Class (Retired)",
"1.2.840.10008.5.1.1.29":"Hardcopy Grayscale Image Storage SOP Class (Retired)",
"1.2.840.10008.5.1.1.30":"Hardcopy Color Image Storage SOP Class (Retired)",
"1.2.840.10008.5.1.1.31":"Pull Print Request SOP Class (Retired)",
"1.2.840.10008.5.1.1.33":"Media Creation Management SOP Class UID",
"1.2.840.10008.5.1.1.40":"Display System SOP Class",
"1.2.840.10008.5.1.4.1.1.1":"Computed Radiography Image Storage",
"1.2.840.10008.5.1.4.1.1.1.1":"Digital X-Ray Image Storage - For Presentation",
"1.2.840.10008.5.1.4.1.1.1.1.1":"Digital X-Ray Image Storage - For Processing",
"1.2.840.10008.5.1.4.1.1.1.2":"Digital Mammography X-Ray Image Storage - For Presentation",
"1.2.840.10008.5.1.4.1.1.1.2.1":"Digital Mammography X-Ray Image Storage - For Processing",
"1.2.840.10008.5.1.4.1.1.1.3":"Digital Intra-Oral X-Ray Image Storage - For Presentation",
"1.2.840.10008.5.1.4.1.1.1.3.1":"Digital Intra-Oral X-Ray Image Storage - For Processing",
"1.2.840.10008.5.1.4.1.1.2":"CT Image Storage",
"1.2.840.10008.5.1.4.1.1.2.1":"Enhanced CT Image Storage",
"1.2.840.10008.5.1.4.1.1.2.2":"Legacy Converted Enhanced CT Image Storage",
"1.2.840.10008.5.1.4.1.1.3":"Ultrasound Multi-frame Image Storage (Retired)",
"1.2.840.10008.5.1.4.1.1.3.1":"Ultrasound Multi-frame Image Storage",
"1.2.840.10008.5.1.4.1.1.4":"MR Image Storage",
"1.2.840.10008.5.1.4.1.1.4.1":"Enhanced MR Image Storage",
"1.2.840.10008.5.1.4.1.1.4.2":"MR Spectroscopy Storage",
"1.2.840.10008.5.1.4.1.1.4.3":"Enhanced MR Color Image Storage",
"1.2.840.10008.5.1.4.1.1.4.4":"Legacy Converted Enhanced MR Image Storage",
"1.2.840.10008.5.1.4.1.1.5":"Nuclear Medicine Image Storage (Retired)",
"1.2.840.10008.5.1.4.1.1.6":"Ultrasound Image Storage (Retired)",
"1.2.840.10008.5.1.4.1.1.6.1":"Ultrasound Image Storage",
"1.2.840.10008.5.1.4.1.1.6.2":"Enhanced US Volume Storage",
"1.2.840.10008.5.1.4.1.1.7":"Secondary Capture Image Storage",
"1.2.840.10008.5.1.4.1.1.7.1":"Multi-frame Single Bit Secondary Capture Image Storage",
"1.2.840.10008.5.1.4.1.1.7.2":"Multi-frame Grayscale Byte Secondary Capture Image Storage",
"1.2.840.10008.5.1.4.1.1.7.3":"Multi-frame Grayscale Word Secondary Capture Image Storage",
"1.2.840.10008.5.1.4.1.1.7.4":"Multi-frame True Color Secondary Capture Image Storage",
"1.2.840.10008.5.1.4.1.1.8":"Standalone Overlay Storage (Retired)",
"1.2.840.10008.5.1.4.1.1.9":"Standalone Curve Storage (Retired)",
"1.2.840.10008.5.1.4.1.1.9.1":"Waveform Storage - Trial (Retired)",
"1.2.840.10008.5.1.4.1.1.9.1.1":"12-lead ECG Waveform Storage",
"1.2.840.10008.5.1.4.1.1.9.1.2":"General ECG Waveform Storage",
"1.2.840.10008.5.1.4.1.1.9.1.3":"Ambulatory ECG Waveform Storage",
"1.2.840.10008.5.1.4.1.1.9.2.1":"Hemodynamic Waveform Storage",
"1.2.840.10008.5.1.4.1.1.9.3.1":"Cardiac Electrophysiology Waveform Storage",
"1.2.840.10008.5.1.4.1.1.9.4.1":"Basic Voice Audio Waveform Storage",
"1.2.840.10008.5.1.4.1.1.9.4.2":"General Audio Waveform Storage",
"1.2.840.10008.5.1.4.1.1.9.5.1":"Arterial Pulse Waveform Storage",
"1.2.840.10008.5.1.4.1.1.9.6.1":"Respiratory Waveform Storage",
"1.2.840.10008.5.1.4.1.1.9.6.2":"Multi-channel Respiratory Waveform Storage",
"1.2.840.10008.5.1.4.1.1.9.7.1":"Routine Scalp Electroencephalogram Waveform Storage",
"1.2.840.10008.5.1.4.1.1.9.7.2":"Electromyogram Waveform Storage",
"1.2.840.10008.5.1.4.1.1.9.7.3":"Electrooculogram Waveform Storage",
"1.2.840.10008.5.1.4.1.1.9.7.4":"Sleep Electroencephalogram Waveform Storage",
"1.2.840.10008.5.1.4.1.1.9.8.1":"Body Position Waveform Storage",
"1.2.840.10008.5.1.4.1.1.10":"Standalone Modality LUT Storage (Retired)",
"1.2.840.10008.5.1.4.1.1.11":"Standalone VOI LUT Storage (Retired)",
"1.2.840.10008.5.1.4.1.1.11.1":"Grayscale Softcopy Presentation State Storage",
"1.2.840.10008.5.1.4.1.1.11.2":"Color Softcopy Presentation State Storage",
"1.2.840.10008.5.1.4.1.1.11.3":"Pseudo-Color Softcopy Presentation State Storage",
"1.2.840.10008.5.1.4.1.1.11.4":"Blending Softcopy Presentation State Storage",
"1.2.840.10008.5.1.4.1.1.11.5":"XA/XRF Grayscale Softcopy Presentation State Storage",
"1.2.840.10008.5.1.4.1.1.11.6":"Grayscale Planar MPR Volumetric Presentation State Storage",
"1.2.840.10008.5.1.4.1.1.11.7":"Compositing Planar MPR Volumetric Presentation State Storage",
"1.2.840.10008.5.1.4.1.1.11.8":"Advanced Blending Presentation State Storage",
"1.2.840.10008.5.1.4.1.1.11.9":"Volume Rendering Volumetric Presentation State Storage",
"1.2.840.10008.5.1.4.1.1.11.10":"Segmented Volume Rendering Volumetric Presentation State Storage",
"1.2.840.10008.5.1.4.1.1.11.11":"Multiple Volume Rendering Volumetric Presentation State Storage",
"1.2.840.10008.5.1.4.1.1.12.1":"X-Ray Angiographic Image Storage",
"1.2.840.10008.5.1.4.1.1.12.1.1":"Enhanced XA Image Storage",
"1.2.840.10008.5.1.4.1.1.12.2":"X-Ray Radiofluoroscopic Image Storage",
"1.2.840.10008.5.1.4.1.1.12.2.1":"Enhanced XRF Image Storage",
"1.2.840.10008.5.1.4.1.1.12.3":"X-Ray Angiographic Bi-Plane Image Storage (Retired)",
"1.2.840.10008.5.1.4.1.1.12.77":"Zeiss OPT File (Retired)",
"1.2.840.10008.5.1.4.1.1.13.1.1":"X-Ray 3D Angiographic Image Storage",
"1.2.840.10008.5.1.4.1.1.13.1.2":"X-Ray 3D Craniofacial Image Storage",
"1.2.840.10008.5.1.4.1.1.13.1.3":"Breast Tomosynthesis Image Storage",
"1.2.840.10008.5.1.4.1.1.13.1.4":"Breast Projection X-Ray Image Storage - For Presentation",
"1.2.840.10008.5.1.4.1.1.13.1.5":"Breast Projection X-Ray Image Storage - For Processing",
"1.2.840.10008.5.1.4.1.1.14.1":"Intravascular Optical Coherence Tomography Image Storage - For Presentation",
"1.2.840.10008.5.1.4.1.1.14.2":"Intravascular Optical Coherence Tomography Image Storage - For Processing",
"1.2.840.10008.5.1.4.1.1.20":"Nuclear Medicine Image Storage",
"1.2.840.10008.5.1.4.1.1.30":"Parametric Map Storage",
"1.2.840.10008.5.1.4.1.1.40":"MR Image Storage Zero Padded (Retired)",
"1.2.840.10008.5.1.4.1.1.66":"Raw Data Storage",
"1.2.840.10008.5.1.4.1.1.66.1":"Spatial Registration Storage",
"1.2.840.10008.5.1.4.1.1.66.2":"Spatial Fiducials Storage",
"1.2.840.10008.5.1.4.1.1.66.3":"Deformable Spatial Registration Storage",
"1.2.840.10008.5.1.4.1.1.66.4":"Segmentation Storage",
"1.2.840.10008.5.1.4.1.1.66.5":"Surface Segmentation Storage",
"1.2.840.10008.5.1.4.1.1.66.6":"Tractography Results Storage",
"1.2.840.10008.5.1.4.1.1.67":"Real World Value Mapping Storage",
"1.2.840.10008.5.1.4.1.1.68.1":"Surface Scan Mesh Storage",
"1.2.840.10008.5.1.4.1.1.68.2":"Surface Scan Point Cloud Storage",
"1.2.840.10008.5.1.4.1.1.77.1":"VL Image Storage - Trial (Retired)",
"1.2.840.10008.5.1.4.1.1.77.2":"VL Multi-frame Image Storage - Trial (Retired)",
"1.2.840.10008.5.1.4.1.1.77.1.1":"VL Endoscopic Image Storage",
"1.2.840.10008.5.1.4.1.1.77.1.1.1":"Video Endoscopic Image Storage",
"1.2.840.10008.5.1.4.1.1.77.1.2":"VL Microscopic Image Storage",
"1.2.840.10008.5.1.4.1.1.77.1.2.1":"Video Microscopic Image Storage",
"1.2.840.10008.5.1.4.1.1.77.1.3":"VL Slide-Coordinates Microscopic Image Storage",
"1.2.840.10008.5.1.4.1.1.77.1.4":"VL Photographic Image Storage",
"1.2.840.10008.5.1.4.1.1.77.1.4.1":"Video Photographic Image Storage",
"1.2.840.10008.5.1.4.1.1.77.1.5.1":"Ophthalmic Photography 8 Bit Image Storage",
"1.2.840.10008.5.1.4.1.1.77.1.5.2":"Ophthalmic Photography 16 Bit Image Storage",
"1.2.840.10008.5.1.4.1.1.77.1.5.3":"Stereometric Relationship Storage",
"1.2.840.10008.5.1.4.1.1.77.1.5.4":"Ophthalmic Tomography Image Storage",
"1.2.840.10008.5.1.4.1.1.77.1.5.5":"Wide Field Ophthalmic Photography Stereographic Projection Image Storage",
"1.2.840.10008.5.1.4.1.1.77.1.5.6":"Wide Field Ophthalmic Photography 3D Coordinates Image Storage",
"1.2.840.10008.5.1.4.1.1.77.1.5.7":"Ophthalmic Optical Coherence Tomography En Face Image Storage",
"1.2.840.10008.5.1.4.1.1.77.1.5.8":"Ophthalmic Optical Coherence Tomography B-scan Volume Analysis Storage",
"1.2.840.10008.5.1.4.1.1.77.1.6":"VL Whole Slide Microscopy Image Storage",
"1.2.840.10008.5.1.4.1.1.77.1.7":"Dermoscopic Photography Image Storage",
"1.2.840.10008.5.1.4.1.1.78.1":"Lensometry Measurements Storage",
"1.2.840.10008.5.1.4.1.1.78.2":"Autorefraction Measurements Storage",
"1.2.840.10008.5.1.4.1.1.78.3":"Keratometry Measurements Storage",
"1.2.840.10008.5.1.4.1.1.78.4":"Subjective Refraction Measurements Storage",
"1.2.840.10008.5.1.4.1.1.78.5":"Visual Acuity Measurements Storage",
"1.2.840.10008.5.1.4.1.1.78.6":"Spectacle Prescription Report Storage",
"1.2.840.10008.5.1.4.1.1.78.7":"Ophthalmic Axial Measurements Storage",
"1.2.840.10008.5.1.4.1.1.78.8":"Intraocular Lens Calculations Storage",
"1.2.840.10008.5.1.4.1.1.79.1":"Macular Grid Thickness and Volume Report Storage",
"1.2.840.10008.5.1.4.1.1.80.1":"Ophthalmic Visual Field Static Perimetry Measurements Storage",
"1.2.840.10008.5.1.4.1.1.81.1":"Ophthalmic Thickness Map Storage",
"1.2.840.10008.5.1.4.1.1.82.1":"Corneal Topography Map Storage",
"1.2.840.10008.5.1.4.1.1.88.1":"Text SR Storage - Trial (Retired)",
"1.2.840.10008.5.1.4.1.1.88.2":"Audio SR Storage - Trial (Retired)",
"1.2.840.10008.5.1.4.1.1.88.3":"Detail SR Storage - Trial (Retired)",
"1.2.840.10008.5.1.4.1.1.88.4":"Comprehensive SR Storage - Trial (Retired)",
"1.2.840.10008.5.1.4.1.1.88.11":"Basic Text SR Storage",
"1.2.840.10008.5.1.4.1.1.88.22":"Enhanced SR Storage",
"1.2.840.10008.5.1.4.1.1.88.33":"Comprehensive SR Storage",
"1.2.840.10008.5.1.4.1.1.88.34":"Comprehensive 3D SR Storage",
"1.2.840.10008.5.1.4.1.1.88.35":"Extensible SR Storage",
"1.2.840.10008.5.1.4.1.1.88.40":"Procedure Log Storage",
"1.2.840.10008.5.1.4.1.1.88.50":"Mammography CAD SR Storage",
"1.2.840.10008.5.1.4.1.1.88.59":"Key Object Selection Document Storage",
"1.2.840.10008.5.1.4.1.1.88.65":"Chest CAD SR Storage",
"1.2.840.10008.5.1.4.1.1.88.67":"X-Ray Radiation Dose SR Storage",
"1.2.840.10008.5.1.4.1.1.88.68":"Radiopharmaceutical Radiation Dose SR Storage",
"1.2.840.10008.5.1.4.1.1.88.69":"Colon CAD SR Storage",
"1.2.840.10008.5.1.4.1.1.88.70":"Implantation Plan SR Storage",
"1.2.840.10008.5.1.4.1.1.88.71":"Acquisition Context SR Storage",
"1.2.840.10008.5.1.4.1.1.88.72":"Simplified Adult Echo SR Storage",
"1.2.840.10008.5.1.4.1.1.88.73":"Patient Radiation Dose SR Storage",
"1.2.840.10008.5.1.4.1.1.88.74":"Planned Imaging Agent Administration SR Storage",
"1.2.840.10008.5.1.4.1.1.88.75":"Performed Imaging Agent Administration SR Storage",
"1.2.840.10008.5.1.4.1.1.90.1":"Content Assessment Results Storage",
"1.2.840.10008.5.1.4.1.1.104.1":"Encapsulated PDF Storage",
"1.2.840.10008.5.1.4.1.1.104.2":"Encapsulated CDA Storage",
"1.2.840.10008.5.1.4.1.1.104.3":"Encapsulated STL Storage",
"1.2.840.10008.5.1.4.1.1.104.4":"Encapsulated OBJ Storage",
"1.2.840.10008.5.1.4.1.1.104.5":"Encapsulated MTL Storage",
"1.2.840.10008.5.1.4.1.1.128":"Positron Emission Tomography Image Storage",
"1.2.840.10008.5.1.4.1.1.128.1":"Legacy Converted Enhanced PET Image Storage",
"1.2.840.10008.5.1.4.1.1.129":"Standalone PET Curve Storage (Retired)",
"1.2.840.10008.5.1.4.1.1.130":"Enhanced PET Image Storage",
"1.2.840.10008.5.1.4.1.1.131":"Basic Structured Display Storage",
"1.2.840.10008.5.1.4.1.1.200.1":"CT Defined Procedure Protocol Storage",
"1.2.840.10008.5.1.4.1.1.200.2":"CT Performed Procedure Protocol Storage",
"1.2.840.10008.5.1.4.1.1.200.3":"Protocol Approval Storage",
"1.2.840.10008.5.1.4.1.1.200.4":"Protocol Approval Information Model - FIND",
"1.2.840.10008.5.1.4.1.1.200.5":"Protocol Approval Information Model - MOVE",
"1.2.840.10008.5.1.4.1.1.200.6":"Protocol Approval Information Model - GET",
"1.2.840.10008.5.1.4.1.1.481.1":"RT Image Storage",
"1.2.840.10008.5.1.4.1.1.481.2":"RT Dose Storage",
"1.2.840.10008.5.1.4.1.1.481.3":"RT Structure Set Storage",
"1.2.840.10008.5.1.4.1.1.481.4":"RT Beams Treatment Record Storage",
"1.2.840.10008.5.1.4.1.1.481.5":"RT Plan Storage",
"1.2.840.10008.5.1.4.1.1.481.6":"RT Brachy Treatment Record Storage",
"1.2.840.10008.5.1.4.1.1.481.7":"RT Treatment Summary Record Storage",
"1.2.840.10008.5.1.4.1.1.481.8":"RT Ion Plan Storage",
"1.2.840.10008.5.1.4.1.1.481.9":"RT Ion Beams Treatment Record Storage",
"1.2.840.10008.5.1.4.1.1.481.10":"RT Physician Intent Storage",
"1.2.840.10008.5.1.4.1.1.481.11":"RT Segment Annotation Storage",
"1.2.840.10008.5.1.4.1.1.481.12":"RT Radiation Set Storage",
"1.2.840.10008.5.1.4.1.1.481.13":"C-Arm Photon-Electron Radiation Storage",
"1.2.840.10008.5.1.4.1.1.481.14":"Tomotherapeutic Radiation Storage",
"1.2.840.10008.5.1.4.1.1.481.15":"Robotic-Arm Radiation Storage",
"1.2.840.10008.5.1.4.1.1.481.16":"RT Radiation Record Set Storage",
"1.2.840.10008.5.1.4.1.1.481.17":"RT Radiation Salvage Record Storage",
"1.2.840.10008.5.1.4.1.1.481.18":"Tomotherapeutic Radiation Record Storage",
"1.2.840.10008.5.1.4.1.1.481.19":"C-Arm Photon-Electron Radiation Record Storage",
"1.2.840.10008.5.1.4.1.1.481.20":"Robotic Radiation Record Storage",
"1.2.840.10008.5.1.4.1.1.501.1":"DICOS CT Image Storage",
"1.2.840.10008.5.1.4.1.1.501.2.1":"DICOS Digital X-Ray Image Storage - For Presentation",
"1.2.840.10008.5.1.4.1.1.501.2.2":"DICOS Digital X-Ray Image Storage - For Processing",
"1.2.840.10008.5.1.4.1.1.501.3":"DICOS Threat Detection Report Storage",
"1.2.840.10008.5.1.4.1.1.501.4":"DICOS 2D AIT Storage",
"1.2.840.10008.5.1.4.1.1.501.5":"DICOS 3D AIT Storage",
"1.2.840.10008.5.1.4.1.1.501.6":"DICOS Quadrupole Resonance (QR) Storage",
"1.2.840.10008.5.1.4.1.1.601.1":"Eddy Current Image Storage",
"1.2.840.10008.5.1.4.1.1.601.2":"Eddy Current Multi-frame Image Storage",
"1.2.840.10008.5.1.4.1.2.1.1":"Patient Root Query/Retrieve Information Model - FIND",
"1.2.840.10008.5.1.4.1.2.1.2":"Patient Root Query/Retrieve Information Model - MOVE",
"1.2.840.10008.5.1.4.1.2.1.3":"Patient Root Query/Retrieve Information Model - GET",
"1.2.840.10008.5.1.4.1.2.2.1":"Study Root Query/Retrieve Information Model - FIND",
"1.2.840.10008.5.1.4.1.2.2.2":"Study Root Query/Retrieve Information Model - MOVE",
"1.2.840.10008.5.1.4.1.2.2.3":"Study Root Query/Retrieve Information Model - GET",
"1.2.840.10008.5.1.4.1.2.3.1":"Patient/Study Only Query/Retrieve Information Model - FIND (Retired)",
"1.2.840.10008.5.1.4.1.2.3.2":"Patient/Study Only Query/Retrieve Information Model - MOVE (Retired)",
"1.2.840.10008.5.1.4.1.2.3.3":"Patient/Study Only Query/Retrieve Information Model - GET (Retired)",
"1.2.840.10008.5.1.4.1.2.4.2":"Composite Instance Root Retrieve - MOVE",
"1.2.840.10008.5.1.4.1.2.4.3":"Composite Instance Root Retrieve - GET",
"1.2.840.10008.5.1.4.1.2.5.3":"Composite Instance Retrieve Without Bulk Data - GET",
"1.2.840.10008.5.1.4.20.1":"Defined Procedure Protocol Information Model - FIND",
"1.2.840.10008.5.1.4.20.2":"Defined Procedure Protocol Information Model - MOVE",
"1.2.840.10008.5.1.4.20.3":"Defined Procedure Protocol Information Model - GET",
"1.2.840.10008.5.1.4.31":"Modality Worklist Information Model - FIND",
"1.2.840.10008.5.1.4.32.1":"General Purpose Worklist Information Model - FIND (Retired)",
"1.2.840.10008.5.1.4.32.2":"General Purpose Scheduled Procedure Step SOP Class (Retired)",
"1.2.840.10008.5.1.4.32.3":"General Purpose Performed Procedure Step SOP Class (Retired)",
"1.2.840.10008.5.1.4.33":"Instance Availability Notification SOP Class",
"1.2.840.10008.5.1.4.34.1":"RT Beams Delivery Instruction Storage - Trial (Retired)",
"1.2.840.10008.5.1.4.34.2":"RT Conventional Machine Verification - Trial (Retired)",
"1.2.840.10008.5.1.4.34.3":"RT Ion Machine Verification - Trial (Retired)",
"1.2.840.10008.5.1.4.34.4.1":"Unified Procedure Step - Push SOP Class - Trial (Retired)",
"1.2.840.10008.5.1.4.34.4.2":"Unified Procedure Step - Watch SOP Class - Trial (Retired)",
"1.2.840.10008.5.1.4.34.4.3":"Unified Procedure Step - Pull SOP Class - Trial (Retired)",
"1.2.840.10008.5.1.4.34.4.4":"Unified Procedure Step - Event SOP Class - Trial (Retired)",
"1.2.840.10008.5.1.4.34.6.1":"Unified Procedure Step - Push SOP Class",
"1.2.840.10008.5.1.4.34.6.2":"Unified Procedure Step - Watch SOP Class",
"1.2.840.10008.5.1.4.34.6.3":"Unified Procedure Step - Pull SOP Class",
"1.2.840.10008.5.1.4.34.6.4":"Unified Procedure Step - Event SOP Class",
"1.2.840.10008.5.1.4.34.6.5":"Unified Procedure Step - Query SOP Class",
"1.2.840.10008.5.1.4.34.7":"RT Beams Delivery Instruction Storage",
"1.2.840.10008.5.1.4.34.8":"RT Conventional Machine Verification",
"1.2.840.10008.5.1.4.34.9":"RT Ion Machine Verification",
"1.2.840.10008.5.1.4.34.10":"RT Brachy Application Setup Delivery Instruction Storage",
"1.2.840.10008.5.1.4.37.1":"General Relevant Patient Information Query",
"1.2.840.10008.5.1.4.37.2":"Breast Imaging Relevant Patient Information Query",
"1.2.840.10008.5.1.4.37.3":"Cardiac Relevant Patient Information Query",
"1.2.840.10008.5.1.4.38.1":"Hanging Protocol Storage",
"1.2.840.10008.5.1.4.38.2":"Hanging Protocol Information Model - FIND",
"1.2.840.10008.5.1.4.38.3":"Hanging Protocol Information Model - MOVE",
"1.2.840.10008.5.1.4.38.4":"Hanging Protocol Information Model - GET",
"1.2.840.10008.5.1.4.39.1":"Color Palette Storage",
"1.2.840.10008.5.1.4.39.2":"Color Palette Query/Retrieve Information Model - FIND",
"1.2.840.10008.5.1.4.39.3":"Color Palette Query/Retrieve Information Model - MOVE",
"1.2.840.10008.5.1.4.39.4":"Color Palette Query/Retrieve Information Model - GET",
"1.2.840.10008.5.1.4.41":"Product Characteristics Query SOP Class",
"1.2.840.10008.5.1.4.42":"Substance Approval Query SOP Class",
"1.2.840.10008.5.1.4.43.1":"Generic Implant Template Storage",
"1.2.840.10008.5.1.4.43.2":"Generic Implant Template Information Model - FIND",
"1.2.840.10008.5.1.4.43.3":"Generic Implant Template Information Model - MOVE",
"1.2.840.10008.5.1.4.43.4":"Generic Implant Template Information Model - GET",
"1.2.840.10008.5.1.4.44.1":"Implant Assembly Template Storage",
"1.2.840.10008.5.1.4.44.2":"Implant Assembly Template Information Model - FIND",
"1.2.840.10008.5.1.4.44.3":"Implant Assembly Template Information Model - MOVE",
"1.2.840.10008.5.1.4.44.4":"Implant Assembly Template Information Model - GET",
"1.2.840.10008.5.1.4.45.1":"Implant Template Group Storage",
"1.2.840.10008.5.1.4.45.2":"Implant Template Group Information Model - FIND",
"1.2.840.10008.5.1.4.45.3":"Implant Template Group Information Model - MOVE",
"1.2.840.10008.5.1.4.45.4":"Implant Template Group Information Model - GET",
"1.2.840.10008.10.1":"Video Endoscopic Image Real-Time Communication",
"1.2.840.10008.10.2":"Video Photographic Image Real-Time Communication",
"1.2.840.10008.10.3":"Audio Waveform Real-Time Communication",
"1.2.840.10008.10.4":"Rendition Selection Document Real-Time Communication",
"1.2.124.113532.3500.7":"Private Agfa Basic Attribute Presentation State",
"1.2.124.113532.3500.8.1":"Private Agfa Arrival Transaction",
"1.2.124.113532.3500.8.2":"Private Agfa Dictation Transaction",
"1.2.124.113532.3500.8.3":"Private Agfa Report Transcription Transaction",
"1.2.124.113532.3500.8.4":"Private Agfa Report Approval Transaction",
"1.2.276.0.48.5.1.4.1.1.7":"Private TomTec Annotation Storage",
"1.2.392.200036.9116.7.8.1.1.1":"Private Toshiba US Image Storage",
"1.2.392.200036.9125.1.1.2":"Private Fuji CR Image Storage",
"1.2.528.1.1001.5.1.1.1":"Private GE Collage Storage",
"1.2.826.0.1.3680043.293.1.0.1":"Private ERAD Practice Builder Report Text Storage",
"1.2.826.0.1.3680043.293.1.0.2":"Private ERAD Practice Builder Report Dictation Storage",
"1.2.840.113543.6.6.1.3.10001":"Private Philips HP Live 3D 01 Storage",
"1.2.840.113543.6.6.1.3.10002":"Private Philips HP Live 3D 02 Storage",
"1.2.840.113619.4.26":"Private GE 3D Model Storage",
"1.2.840.113619.4.3":"Private GE Dicom CT Image Info Object",
"1.2.840.113619.4.4":"Private GE Dicom Display Image Info Object",
"1.2.840.113619.4.2":"Private GE Dicom MR Image Info Object",
"1.2.840.113619.4.27":"Private GE eNTEGRA Protocol or NM Genie Storage",
"1.2.840.113619.4.30":"Private GE PET Raw Data Storage",
"1.2.840.113619.4.5.249":"Private GE RT Plan Storage",
"1.3.6.1.4.1.5962.301.1":"Private PixelMed Legacy Converted Enhanced CT Image Storage",
"1.3.6.1.4.1.5962.301.2":"Private PixelMed Legacy Converted Enhanced MR Image Storage",
"1.3.6.1.4.1.5962.301.3":"Private PixelMed Legacy Converted Enhanced PET Image Storage",
"1.3.6.1.4.1.5962.301.9":"Private PixelMed Floating Point Image Storage",
"1.3.12.2.1107.5.9.1":"Private Siemens CSA Non Image Storage",
"1.3.12.2.1107.5.99.3.10":"Private Siemens CT MR Volume Storage",
"1.3.12.2.1107.5.99.3.11":"Private Siemens AX Frame Sets Storage",
"1.3.46.670589.2.3.1.1":"Private Philips Specialised XA Storage",
"1.3.46.670589.2.4.1.1":"Private Philips CX Image Storage",
"1.3.46.670589.2.5.1.1":"Private Philips 3D Presentation State Storage",
"1.3.46.670589.2.8.1.1":"Private Philips VRML Storage",
"1.3.46.670589.2.11.1.1":"Private Philips Volume Set Storage",
"1.3.46.670589.5.0.1":"Private Philips Volume Storage (Retired)",
"1.3.46.670589.5.0.1.1":"Private Philips Volume Storage",
"1.3.46.670589.5.0.2":"Private Philips 3D Object Storage (Retired)",
"1.3.46.670589.5.0.2.1":"Private Philips 3D Object Storage",
"1.3.46.670589.5.0.3":"Private Philips Surface Storage (Retired)",
"1.3.46.670589.5.0.3.1":"Private Philips Surface Storage",
"1.3.46.670589.5.0.4":"Private Philips Composite Object Storage",
"1.3.46.670589.5.0.7":"Private Philips MR Cardio Profile Storage",
"1.3.46.670589.5.0.8":"Private Philips MR Cardio Storage (Retired)",
"1.3.46.670589.5.0.8.1":"Private Philips MR Cardio Storage",
"1.3.46.670589.5.0.9":"Private Philips CT Synthetic Image Storage",
"1.3.46.670589.5.0.10":"Private Philips MR Synthetic Image Storage",
"1.3.46.670589.5.0.11":"Private Philips MR Cardio Analysis Storage (Retired)",
"1.3.46.670589.5.0.11.1":"Private Philips MR Cardio Analysis Storage",
"1.3.46.670589.5.0.12":"Private Philips CX Synthetic Image Storage",
"1.3.46.670589.5.0.13":"Private Philips Perfusion Storage",
"1.3.46.670589.5.0.14":"Private Philips Perfusion Image Storage",
"1.3.46.670589.7.8.1618510091":"Private Philips X-Ray MF Storage",
"1.3.46.670589.7.8.1618510092":"Private Philips Live Run Storage",
"1.3.46.670589.7.8.16185100129":"Private Philips Run Storage",
"1.3.46.670589.7.8.16185100130":"Private Philips Reconstruction Storage",
"1.3.46.670589.11.0.0.12.1":"Private Philips MR Spectrum Storage",
"1.3.46.670589.11.0.0.12.2":"Private Philips MR Series Data Storage",
"1.3.46.670589.11.0.0.12.3":"Private Philips MR Color Image Storage",
"1.3.46.670589.11.0.0.12.4":"Private Philips MR Examcard Storage",
"2.16.840.1.114033.5.1.4.1.1.130":"Private PMOD Multi-frame Image Storage"
}));
