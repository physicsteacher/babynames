Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){
    //login
    this.route('login', {
      path: '/login',
      template: 'login',

    });
});

Router.map(function(){
    //register
    this.route('register', {
      path: '/register',
      template: 'register',

    });
});

Router.map(function(){
    //home
    this.route('home', {
      path: '/',
      template: 'home',

    });
});

Router.map(function(){
    //addName
    this.route('addName', {
      path: '/addName',
      template: 'addName',
      onBeforeAction: function(){
        if (Meteor.user() == null){
          Router.go('/');
        }
        this.next();
      }
    });
});

Router.map(function(){
    //addPartner
    this.route('addPartner', {
      path: '/addPartner',
      template: 'addPartner',
      onBeforeAction: function(){
        if (Meteor.user() == null){
          Router.go('/');
        }
        this.next();
      }
    });
});

Router.map(function(){
    //partnerNames
    this.route('partnersNames', {
      path: '/partnersNames',
      template: 'partnersNames',
      onBeforeAction: function(){
        if (Meteor.user() == null){
          Router.go('/');
        }
        this.next();
      }
    });
});

Router.map(function(){
    //myName
    this.route('myNames', {
      path: '/myNames',
      template: 'myNames',
      onBeforeAction: function(){
        if (Meteor.user() == null){
          Router.go('/');
        }
        this.next();
      }
    });
});

Router.map(function(){
    //home
    this.route('matches', {
      path: '/matches',
      template: 'matches',
      onBeforeAction: function(){
        if (Meteor.user() == null){
          Router.go('/');
        }
        this.next();
      }
    });
});
