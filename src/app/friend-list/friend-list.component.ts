import { Component } from '@angular/core';

@Component({
  selector: 'app-friend-list',
  standalone: false,
  templateUrl: './friend-list.component.html',
  styleUrl: './friend-list.component.css',
})
export class FriendListComponent {
  title = 'These are my real (not made up) friends';
  friends: friend[] = ['Malavander', 'Argoth', 'Simon', 'Loopy'];
}
