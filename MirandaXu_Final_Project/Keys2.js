function Keys2() { //when cat touches the key, corresponding key lights up w/ random color
  this.display = function(count) {
    line(100+(count*80), 0, 140+(count*80), 0);
    line(80+(count*80), 200, 100+(count*80), 200);
    line(140+(count*80), 200, 160+(count*80), 200);
    line(80+(count*80), 300, 160+(count*80), 300);
    line(100+(count*80), 0, 100+(count*80), 200);
    line(140+(count*80), 0, 140+(count*80), 200);
    line(80+(count*80), 200, 80+(count*80), 300);
    line(160+(count*80), 200, 160+(count*80), 300);
  }
}