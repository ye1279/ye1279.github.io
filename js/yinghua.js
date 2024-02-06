var RENDERER = {
        INIT_CHERRY_BLOSSOM_COUNT: 30,
        MAX_ADDING_INTERVAL: 10,

        init: function() {
          this.setParameters();
          this.reconstructMethods();
          this.createCherries();
          this.render();
        setParameters: function() {
          this.$container = $('#jsi-cherry-container');
          this.width = this.$container.width();
          this.height = this.$container.height();
          this.context = $('<canvas />')
            .attr({ width: this.width, height: this.height })
            .appendTo(this.$container)
            .get(0)
            .getContext('2d');
          this.cherries = [];
          this.maxAddingInterval = Math.round(
            (this.MAX_ADDING_INTERVAL * 1000) / this.width
          );
          this.addingInterval = this.maxAddingInterval;
        },
        reconstructMethods: function() {
          this.render = this.render.bind(this);
        },
      var CHERRY_BLOSSOM = function(renderer, isRandom) {
        this.renderer = renderer;
        this.init(isRandom);
      };
      CHERRY_BLOSSOM.prototype = {
        FOCUS_POSITION: 300,
        FAR_LIMIT: 600,
        MAX_RIPPLE_COUNT: 100,
        RIPPLE_RADIUS: 100,
        SURFACE_RATE: 0.5,
        SINK_OFFSET: 20,
        init: function(isRandom) {
          this.x = this.getRandomValue(
            -this.renderer.width,
            this.renderer.width
          );
          var axis = this.getAxis(),
            theta =
              this.theta +
              (Math.ceil(
                -(this.y + this.renderer.height * this.SURFACE_RATE) / this.vy
              ) *
                Math.PI) /
                500;
          theta %= Math.PI * 2;

          this.offsetY =
            40 * (theta <= Math.PI / 2 || theta >= (Math.PI * 3) / 2 ? -1 : 1);
          this.thresholdY =
            this.renderer.height / 2 +
            this.renderer.height * this.SURFACE_RATE * axis.rate;
          this.entityColor.addColorStop(
            0,
            'hsl(330, 70%, ' + 50 * (0.3 + axis.rate) + '%)'
          );
          this.entityColor.addColorStop(
            0.05,
            'hsl(330, 40%,' + 55 * (0.3 + axis.rate) + '%)'
          );
          this.entityColor.addColorStop(
            1,
            'hsl(330, 20%, ' + 70 * (0.3 + axis.rate) + '%)'
          );
      $(function() {
        RENDERER.init();
      });