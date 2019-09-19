import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useDropzone } from 'react-dropzone';

function handleDrop(files) {
  console.log(files);
}

function DropZone(props) {
  const {acceptedFiles, rejectedFiles, getRootProps, getInputProps} = useDropzone({
    onDrop: handleDrop,
    accept: '.jpg, .png',
  });

  const acceptedFilesItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const rejectedFilesItems = rejectedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({className: css(styles.dropzone)})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(Only *.jpeg and *.png images will be accepted)</em>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>
          {acceptedFilesItems}
        </ul>
        <h4>Rejected files</h4>
        <ul>
          {rejectedFilesItems}
        </ul>
      </aside>
    </section>
  );
}

const styles = StyleSheet.create({
  dropzone: {
    border: '3px dashed #888',
    padding: '3em',
    textAlign: 'center',
    width: '100%',
  }
});

export default DropZone
