[![GitHub issues](https://img.shields.io/github/issues/surmon-china/ngx-quill-editor.svg?style=flat-square)](https://github.com/surmon-china/ngx-quill-editor/issues)
[![GitHub forks](https://img.shields.io/github/forks/surmon-china/ngx-quill-editor.svg?style=flat-square)](https://github.com/surmon-china/ngx-quill-editor/network)
[![GitHub stars](https://img.shields.io/github/stars/surmon-china/ngx-quill-editor.svg?style=flat-square)](https://github.com/surmon-china/ngx-quill-editor/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/surmon-china/ngx-quill-editor/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/surmon-china/ngx-quill-editor.svg?style=social?style=flat-square)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

[![NPM](https://nodei.co/npm/ngx-quill-editor.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ngx-quill-editor/)


# Ngx-Quill-Editor
Quill editor for AngularX.

基于Quill、适用于Angularx的富文本编辑器。


# Example
[Demo Page](https://surmon-china.github.io/ngx-quill-editor/)


### Installation

``` bash
npm install ngx-quill-editor --save
```

### Sample

Include QuillEditorModule in your main module:
``` typescript
import { QuillEditorModule } from 'ngx-quill-editor';

@NgModule({
  // ...
  imports: [
    QuillEditorModule
  ],
  // ...
})
export class AppModule {}
```

Then use it in your component:

``` html
<!-- use with ngModel -->
<quill-editor [(ngModel)]="editorContent"
              [options]="editorOptions"
              (blur)="onEditorBlured($event)"
              (focus)="onEditorFocused($event)"
              (ready)="onEditorCreated($event)"
              (change)="onContentChanged($event)"></quill-editor>


<!-- or use with formControl -->
<quill-editor class="form-control"
              [formControl]="editorContent"
              [options]="editorOptions"
              (blur)="onEditorBlured($event)"
              (focus)="onEditorFocused($event)"
              (ready)="onEditorCreated($event)"
              (change)="onContentChanged($event)"></quill-editor>
```

``` javascript
import { Component } from '@angular/core';

@Component({
  selector: 'sample',
  template: require('./sample.html')
})
export class Sample {

  public editor;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder: "insert content..."
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
      this.editorContent = '<h1>content changed!</h1>';
      console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    }, 2800)
  }
}
```


### Configuration
- options : The configuration object for quill see https://quilljs.com/docs/quickstart/


# Author Blog
[Surmon](https://surmon.me)
