import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Skill } from '../../models/skill';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss'],
})
export class SkillListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'update',
    'delete',
  ];
  dataSource!: MatTableDataSource<Skill>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.get().subscribe((skills) => {
      this.dataSource = new MatTableDataSource(skills);
    });
  }
}
