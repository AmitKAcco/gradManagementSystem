import { Component , OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-shared-dash-board',
  templateUrl: './shared-dash-board.component.html',
  styleUrls: ['./shared-dash-board.component.scss']
})
export class SharedDashBoardComponent {
  @Input() bgClass: string;
  @Input() icon: string;
  @Input() count: number;
  @Input() label: string;
  @Input() data: number;
}
