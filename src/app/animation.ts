import { trigger,transition,style,query,group,animate} from "@angular/animations"
export const slideInAnimation=trigger('routeAnimations',[
    transition('home => signup',[
        style({position:'relative'}),
        query(':enter, :leave',[
            style({
                position:'absolute',
                top:0,
                left:0,
                width:'100%',
                height:'100%'
            })
        ]),
        query(':enter',[
            style({left:'100%'})
        ]),
        group([
          query(':leave', [
            animate('2000ms ease-out', style({ left: '-100%' }))
          ]),
          query(':enter', [
            animate('2000ms ease-out', style({ left: '0%' }))
          ])
        ]),
      ]),
      transition('home => login',[
        style({position:'relative'}),
        query(':enter, :leave',[
            style({
                position:'absolute',
                top:0,
                left:0,
                width:'100%',
                height:'100%'
            })
        ]),
        query(':enter',[
            style({left:'100%'})
        ]),
        group([
          query(':leave', [
            animate('2000ms ease-out', style({ left: '-100%' }))
          ]),
          query(':enter', [
            animate('2000ms ease-out', style({ left: '0%' }))
          ])
        ]),
      ]),
      transition('signup <=> login',[
        style({position:'relative'}),
        query(':enter, :leave',[
            style({
                position:'absolute',
                top:0,
                left:0,
                width:'100%',
                height:'100%'
            })
        ]),
        query(':enter',[
            style({left:'-100%'})
        ]),
        group([
          query(':leave', [
            animate('2000ms ease-out', style({ left: '100%' }))
          ]),
          query(':enter', [
            animate('2000ms ease-out', style({ left: '0%' }))
          ])
        ]),
      ]),

    ]);