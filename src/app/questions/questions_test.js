'use strict';

describe('myApp.questions module', function() {

  beforeEach(module('myApp.questions'));

  describe('questions controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var questionsController = $controller('QuestionsController');
      expect(questionsController).toBeDefined();
    }));

  });
});