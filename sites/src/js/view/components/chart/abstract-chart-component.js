import CreateJS             from "easeljs"

export default class AbstractChartComponent {

  constructor( chartModel, devicePixelRatio ) {
    this.chartModel = chartModel;
    this.devicePixelRatio = devicePixelRatio;
    this.addObservers();
  }

  addObservers() {}
  attach( stage ) {}

  initializeElement(element) {
    element.x = element.y = 0;
    return element;
  }

  calculateSlideX( temporaryStart ) {
    const slider = this.chartModel.slider;
    const diffMs = slider.currentRange.start.getTime() - temporaryStart.getTime();
    return ( diffMs / slider.intervalMs ) * 6;
  }
}
