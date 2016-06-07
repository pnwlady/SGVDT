module.exports = function(app) {
  require('./line_graph_controller')(app);
  require('./bubble_chart_controller')(app);
};
