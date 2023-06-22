import Presenter from './presenter.js';

/**
 * @extends {Presenter<FilterView, AppModel>}
 */
class FilterPresenter extends Presenter {
  /**
   * @override
   * @return {FilterViewState}
   */
  createViewState() {
    /**
     * @type {UrlParams}
     */
    const { filter = 'everything' } = this.getUrlParams();
    /**
     * @type {Array<FilterType>}
     */

    const types = ['everything', 'future', 'past', 'present'];
    const items = types.map((it) => (
      {
        value: it,
        isSelected: it === filter,
        isDisabled: this.model.getPoints({filter: it}).length === 0
      }
    ));
    return {items};
  }

  addEventListeners() {
    this.view.addEventListener('change', this.handleViewChange.bind(this));
  }

  /**
   * @param {Event & {target: {value: FilterType}}} event
   */
  handleViewChange (event){
    /**
    * @type {UrlParams}
    */
    const urlParams = {
      filter:event.target.value
    };
    this.setUrlParams(urlParams);
  }
}


export default FilterPresenter;