import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'quill-example-02',
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
export class QuillEditorComponentExample02 {

  public editor;
  public editorContent = `<h3>I am Example 02</h3>`;
  public editorConfig = {
    placeholder: "输入公告内容，支持html"
  };

  constructor() {}

  onEditorBlured(quill) {
    console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    console.log('quill content is changed!', quill, html, text);
  }

  ngOnInit() {
    setTimeout(() => {
      this.editorContent = '<h1>Example 02 changed!</h1>';
      console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    }, 2800)
  }
}
