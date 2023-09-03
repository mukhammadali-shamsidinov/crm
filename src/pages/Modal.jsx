import React, { useEffect, useState } from 'react';
import Rodal from 'rodal';
import '../components/rodal.css'; // Import the CSS for styling
import { useForm } from 'react-hook-form';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { v4 } from 'uuid';
import { db, storage } from '../config';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';

function Modal() {
  const [visible, setVisible] = useState(false);
const {handleSubmit,register,reset} = useForm()
const [progressLoad,setProgressLoad] = useState(0)
  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  function uploadFile(data){
    
    // console.log(data.file[0].name);
    const storageRef = ref(storage, v4()+ data.file[0].name); 

    const uploadTask = uploadBytesResumable(storageRef, data.file[0]);


    uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setProgressLoad(progress)
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      addDoc(collection(db,"file"),{
        file_url:downloadURL,
        name:data.file[0].name,
        created_time:String(new Date()),
        data_contact:String(`${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()}`)
      }).then(()=>{
        toast.success("file uploaded")
        reset()
      }).catch(()=>{
        toast.warning("Mistakes")
      })
    });
  }
);
  }
  useEffect(()=>{
    if(progressLoad==100){
        setVisible(false)
    }
  },[progressLoad])

  return (
    <div>
      <button
      onClick={show}
                
                type="button"
                className="btn btn-sm btn-primary float-end"
              >
                <span className="glyphicon glyphicon-cloud-upload" />{" "}
                <i class="fa-solid fa-upload"></i> Загрузить файлы
              </button>

      <Rodal visible={visible} onClose={hide} height={300}>
        <h1>Upload File</h1>
        <form onSubmit={handleSubmit(uploadFile)}>
        <div class="mb-3">
  <label for="fileInput" class="form-label">Choose a file</label>
  <input type="file" class="form-control" id="fileInput" {...register("file",{
    required:true
  })}/>
  <small class="text-muted">Max file size: 100MB</small>
</div>



        <button type='submit' className='btn btn-success'><i class="fa-solid fa-upload"></i> Загрузить файлы</button>
        </form>
        {progressLoad == 0 ? null :<>
            <b>{Math.floor(progressLoad)}</b>%
            <div className="progress">
              
  <div
    className="progress-bar progress-bar-striped"
    role="progressbar"
    style={{ width: `${progressLoad}%` }}
  />
</div>
  
        </>}
       
      </Rodal>



    </div>
  );
}

export default Modal;
