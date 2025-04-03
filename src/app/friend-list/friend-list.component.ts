import { Component } from '@angular/core';

@Component({
  selector: 'app-friend-list',
  standalone: false,
  templateUrl: './friend-list.component.html',
<<<<<<< HEAD
  styleUrl: './friend-list.component.css',
})
export class FriendListComponent {
  title = 'These are my real (not made up) friends';
  friends: friend[] = ['Malavander', 'Argoth', 'Simon', 'Loopy'];
=======
  styleUrl: './friend-list.component.css'
})
export class FriendListComponent {
  title = "My super real friends that aren't made up at all!"
  friends: string[] = ["Simon, the Outfitter", "Malavander, the Mystic", "Argoth, the Blacksmith", "Loopy, the Queen"];

  newFriend: string = "";

  addFriend() {
    this.friends.push(this.newFriend);
  }
  
  delFriend(friend: string) {
    let idx: number = friend.lastIndexOf(`${friend}`);
    //this.friends.splice(idx, 1);
    console.log(`idx = ${idx}`);
    console.log(`Delete friend: ${friend}`);
  }
>>>>>>> 3e736a9ce81abdce0e07244bd4bc3e61a059d17b
}
