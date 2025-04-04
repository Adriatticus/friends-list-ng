import { Component } from '@angular/core';

@Component({
  selector: 'app-friend-list',
  standalone: false,
  templateUrl: './friend-list.component.html',
  styleUrl: './friend-list.component.css',
})
export class FriendListComponent {
  title = "My super real friends that aren't made up at all!";
  friends: string[] = [
    'Simon, the Outfitter',
    'Malavander, the Mystic',
    'Argoth, the Blacksmith',
    'Loopy, the Queen',
  ];

  newFriend: string = '';

  addFriend() {
    this.friends.push(this.newFriend);
  }

  delFriend(friend: string) {
    let idx: number = this.friends.indexOf(`${friend}`);
    this.friends.splice(idx, 1);
    console.log(`idx = ${idx}`);
    console.log(`Delete friend: ${friend}`);
  }
}
