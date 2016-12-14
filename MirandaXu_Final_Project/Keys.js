function Keys() { //when cat touches the key, corresponding key lights up w/ random color
  this.display = function(count) {
    line(60+(count*80), 0, 100+(count*80), 0);
    line(60+(count*80), 200, 100+(count*80), 200);
    line(60+(count*80), 0, 60+(count*80), 200);
    line(100+(count*80), 0, 100+(count*80), 200);
  }
}