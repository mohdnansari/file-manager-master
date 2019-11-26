import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFile: TreeNode;
  filesTree: TreeNode[];
  files: File[];
  cols: any[];

  constructor() {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'date', header: 'Date' },
      { field: 'permission', header: 'Permission' }
    ];
    this.filesTree = [
      {
        label: 'Documents',
        data: 'Documents Folder',
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        children: [
          {
            label: 'Work',
            data: 'Work Folder',
            expandedIcon: 'fa fa-folder-open',
            collapsedIcon: 'fa fa-folder',
            children: [
              {
                label: 'Expenses.doc',
                icon: 'fa fa-file-word-o',
                data: 'Expenses Document'
              },
              {
                label: 'Resume.doc',
                icon: 'fa fa-file-word-o',
                data: 'Resume Document'
              }
            ]
          },
          {
            label: 'Home',
            data: [
              {
                label: 'Invoices.txt',
                icon: 'fa fa-file-word-o',
                data: 'Invoices for this month'
              }
            ],
            expandedIcon: 'fa fa-folder-open',
            collapsedIcon: 'fa fa-folder'
          }
        ]
      },
      {
        label: 'Pictures',
        data: 'Pictures Folder',
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        children: [
          {
            label: 'barcelona.jpg',
            icon: 'fa fa-file-image-o',
            data: 'Barcelona Photo'
          },
          {
            label: 'logo.jpg',
            icon: 'fa fa-file-image-o',
            data: 'PrimeFaces Logo'
          },
          {
            label: 'primeui.png',
            icon: 'fa fa-file-image-o',
            data: 'PrimeUI Logo'
          }
        ]
      },
      {
        label: 'Movies',
        data: 'Movies Folder',
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        children: [
          {
            label: 'Al Pacino',
            data: 'Pacino Movies',
            children: [
              {
                label: 'Scarface',
                icon: 'fa fa-file-video-o',
                data: 'Scarface Movie'
              },
              {
                label: 'Serpico',
                icon: 'fa fa-file-video-o',
                data: 'Serpico Movie'
              }
            ]
          },
          {
            label: 'Robert De Niro',
            data: 'De Niro Movies',
            children: [
              {
                label: 'Goodfellas',
                icon: 'fa fa-file-video-o',
                data: 'Goodfellas Movie'
              },
              {
                label: 'Untouchables',
                icon: 'fa fa-file-video-o',
                data: 'Untouchables Movie'
              }
            ]
          }
        ]
      }
    ];
  }
  nodeSelect(event) {
    console.log('event selected: ', event);
  }

  nodeUnselect(event) {
    console.log('event unselected: ', event);
  }

  nodeExpandMessage(event) {
    console.log('event expand: ', event);
  }
}

class File {
  name = 'file1';
  size = '4kb';
  date: Date;
  permission = 'admin';
}
