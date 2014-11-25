Ext.define('MyApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    itemId:'mainpanel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: '首页',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,
		     layout: 'vbox',
              items:[
                  {
                      docked: 'top',
                      xtype: 'titlebar',
                      title: '欢迎使用'
                  },
                  {
                      xtype : 'panel',
                      //height:100,
                      flex:1,
                      //margin : 5,
                      cls:'home',
                      //centered:true,
                      layout:'hbox',
                      items: [{

                          xtype:'button',
                          text:'消息测试',
                          flex:1,
                          icon : "resources/icons/muru.png",
                          iconAlign : 'top',
                          itemId:'msgbtn'


                      },{
                          xtype:'button',
                          flex:1,
                          text:'地理位置测试',
                          icon : "resources/icons/about.png",
                          iconAlign : 'top',
                          itemId:'locationbtn'

                      },{
                          xtype:'button',
                          flex:1,
                          text:'picture测试',
                          icon : "resources/icons/shuijiao.png",
                          iconAlign : 'top',
                          itemId:'imagebtn'
                      }
                      ]
                  } ,
                  {
                      xtype: 'image',
                      itemId:'imagerc',
                      flex:3,
                      src: 'resources/icons/snow.jpg'
                  }
              ]
                /*,

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")*/
            },
            {
                title: '地图',
                iconCls: 'action',
                 layout: 'fit',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: '地图浏览'
                    },
                    {
                        xtype: 'panel',
                        itemId:'map',
                        flex:1,
                        listeners: {
                            painted: function() {
                                //Ext.Msg.alert('I was painted to the screen');
                                var main=this.up('main');
                                main.fireEvent('mapinit', this);
                            }
                        }
                        /*initialize: function(obj) {
                             var me = this;
                             alert(33);
                             //main.fireEvent('mapinit', ele);
                             me.on('painted',function(){
                                  alert(2222);
                                   var main=me.up('main');
                                   alert(main);
                                    main.fireEvent('mapinit', obj);           
                             });
                             
                             
                        }*/,
                        
                        html:'<div id="map"></div>'
                    }
                    
                ]
            },
            {
                title: '列表',
                iconCls: 'action',
                layout: 'fit',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: '列表'
                    },
                    /*{
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }*/
                    {
                        xtype:'navigationview',
                        autoDestroy:false,
                        //fullscreen: true,
                        itemId:'navigationview',
                                //inside this first item we are going to add a button
                        items: [
                            {
                                xtype: 'contacts'

                            }
                        ]


                    }
                ]
            }
        ]
    }
});
