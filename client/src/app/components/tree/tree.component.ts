import { Component, Input } from '@angular/core';
import {} from '@angular/material/tree';
import { TreeBuilderEnum } from '@enums';

@Component({
  selector: 'app-tree',
  standalone: true,
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
})
export class TreeComponent<T = string> {
  @Input({ required: true })
  dataSource: TreeBuilderEnum.FlatNodeTree<T>[];
}
