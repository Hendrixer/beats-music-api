/*
 * beats-music-api
 * author: Scott Moss <willscottmoss@gmail.com>
 * Github: https://github.com/Hendrixer
 *
 */

var Oauth = require('oauth').Oauth2,
    qs    = require('querystring'),
    srlzr = require('serializer'),
    base  = 'https://partner.api.beatsmusic.com/v1';

function Beats(){
  this.url = base;
  this.oath = null;
}

Beats.prototype.setup = function(config) {
  if(!config.secret){
    throw new Error('You must provide your Beats Music client secret');
  }
  if(!config.clientId){
    throw new Error('You must provide your Beats Music client id');
  }
  this.oath = new Oauth(
              config.clientId,
              config.secret,
              base,
              '/oauth2/authorize',
              '/oauth2/token',

    )
};

var beat = new Beats();
beat.setup({thing: 'wassup',things: 'yoooo' });

