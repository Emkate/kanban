import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/shared/interfaces/tag.interface';

@Component({
  selector: 'app-tag-item',
  templateUrl: './tag-item.component.html',
  styleUrls: ['./tag-item.component.scss']
})
export class TagItemComponent implements OnInit {
  @Input() data?: Tag;

  constructor() { }

  ngOnInit(): void {
  }

}
