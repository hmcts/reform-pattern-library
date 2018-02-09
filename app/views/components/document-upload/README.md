## Example

```example
<h2 class="heading-large">Upload your marriage certificate</h2>

<div class="text">

  <p>You need to upload a digital photo or scan of your marriage certificate.</p>
  
  <p>You can also upload any other documents that you want to send to the court.</p>
  
  <p>
    <details>

      <summary><span class="summary">How to take the picture</span></summary>

      <div class="panel panel-border-narrow">
        
        <ol class="list list-number">
        
          <li>Place your certificate on a flat service in a well lit room. Use a flash if you need to.</li>
          
          <li>Take a good quality picture of the entire certificate. You should be able to see its edges.</li>
          
          <li>Check that the image is in focus. You must be able to read all the writing on the certificate, 
          including the handwriting. Zoom in if you need to check this.</li>
          
          <li>Send the picture to this device (For example, by email) and save it.</li>
          
        </ol>
        
      </div>

    </details>
  </p>

  <p>The image must be of the entire document and has to be readable by court staff. 
  You can upload a jpg, bmp, png or PDF (maximum file size 10MB).</p>  
  
  <div class="dropzone" tabindex="0">
  
    <form  action="/file-upload" id="dropzone" data-js="drag-and-drop">
      
      <div class="dz-message">          
        <div class="dz-message-icon"></div>      
        <div class="dz-message-text">Drag and drop files here <br>or<br> <span class="link">click to choose a file</div>
      </div>    
      
      <div class="form-group">
        <label class="form-label" for="file-input">Upload a file</label>
        <input type="file" id="file-input" multiple>
      </div>
      
    </form>
    
  </div>
  
  <table>
    <thead>
      <tr>
        <th>Uploaded files</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>No files uploaded</td>
      </tr>
    </tbody>
  </table>
  
  <p>
  
    <details>

      <summary><span class="summary">I can’t upload my documents</span></summary>

      <div class="panel panel-border-narrow">

        <p class="bold-small">Complete your application first, then post them to the court at this address:</p>
        
        <p>
          Bury St Edmunds Divorce Centre<br>
          2nd Floor<br>
          Triton House<br>
          St Andrews Street North<br>
          Bury St Edmunds<br>
          IP33 1TR
        </p>
        
        <p>Your marriage certificate will be kept by the court and won’t be returned to you.</p>
        
      </div>

    </details>
    
  </p>

</div>
```