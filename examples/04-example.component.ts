import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

const Quill = require('quill');
import { ImageImport } from '../modules/ImageImport';
import { ImageResize } from '../modules/ImageResize';
Quill.register('modules/imageImport', ImageImport);
Quill.register('modules/imageResize', ImageResize);

@Component({
  selector: 'quill-example-04',
  template: `<quill-editor [(ngModel)]="editorContent"
                           [options]="editorConfig"
                           (blur)="onEditorBlured($event)"
                           (focus)="onEditorFocused($event)"
                           (ready)="onEditorCreated($event)"
                           (change)="onContentChanged($event)">
            </quill-editor>
            <div class="ql-editor preview" [innerHTML]="editorContent"></div>`,
  styles: [
    `
     .quill-editor {
       min-height: 16em;
       max-height: 20em;
       overflow-y: auto;
     }
     .preview {
       min-height: 10em;
       max-height: 16em;
       overflow-y: auto;
       border: 1px solid #eee;
       border-top: none;
     }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class QuillEditorComponentExample04 {

  public editor;
  public editorContent = '<p>Click on the Image Below to resize</p>' + 
                         '<p><img src="http://ri-sandbox.s3.amazonaws.com/qulljs.png"></p>' +
                         '<p>Or drag/paste an image here</p>';
  public editorConfig = {
    placeholder: "输入公告内容，支持html",
    modules: {
      toolbar: [
        [{ 'size': ['small', false, 'large'] }],
        ['bold', 'italic'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['link', 'image']
      ],
      history: {
        delay: 1000,
        maxStack: 50,
        userOnly: false
      },
      imageImport: true,
      imageResize: {
        displaySize: true
      }
    }
  };

  constructor() {}

  onEditorBlured(quill) {
    // console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    // console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    // console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    // console.log('quill content is changed!', quill, html, text);
  }

  ngOnInit() {
  }
}
