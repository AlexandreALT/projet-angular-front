import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Skill } from '../../models/skill';
import { SkillsService } from '../../services/skills.service';
import { Router } from '@angular/router';

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

  constructor(private skillsService: SkillsService, private router: Router) {}

  ngOnInit(): void {
    this.skillsService.get().subscribe((skills) => {
      this.dataSource = new MatTableDataSource(skills);
    });
  }

  delete(id: number) {
    this.skillsService.delete(id).subscribe(
      (response) => {
        console.log(response);
        window.location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  edit(id: number) {
    this.router.navigate(['add-skill/' + id]);
  }
}
