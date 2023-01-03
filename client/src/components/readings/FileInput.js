import React from "react";

export class FileInput extends React.Component {

    getBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }
  
    onFileChange = async (e) => {
      const { input } = this.props
      const targetFile = e.target.files[0]
      if (targetFile) {
        const val = await this.getBase64(targetFile)
        input.onChange(val)
      } else {
        input.onChange(null)
      }
    }
  
    render() {
  
      return (
        <input
          type="file"
          onChange={this.onFileChange}
        />
      )
    }
  }