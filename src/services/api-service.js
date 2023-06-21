import Service from './service';
/**
 * @extends {Service}
 */
class ApiService extends Service{
  /**
   * @param {Partial<ServiceOptions>} options
   */
  constructor(options){
    super({
      baseUrl: 'https://20.ecmascript.pages.academy/big-trip/',
      minResponseTime: 500,
      authorization: '',
      ...options
    });
  }

  /**
 * @return {Promise<Array<PointInSnakeCase>>}
 */
  async getPoints() {
    const response = await this.request('points');
    const points = response.json();
    return points;
  }


  /**
   * @param {PointInSnakeCase} point
   * @return {Promise<PointInSnakeCase>}
   */
  async addPoint(point) {
    const response = await this.request('points', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(point)
    });

    return response.json();
  }

  /**
   * @param {PointInSnakeCase} point
   * @return {Promise<PointInSnakeCase>}
   */
  async updatePoint(point) {
    const response = await this.request(`points/${point.id}`, {
      method: 'PUT',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(point)
    });

    return response.json();
  }

  /**
   * @param {string} id
   * @return {Promise<void>}
   */
  async deletePoint(id) {
    await this.request(`points/${id}`, {
      method: 'DELETE',
    });
  }

  /**
 * @return {Promise<Array<Destination>>}
 */
  async getDestinations() {
    const response = await this.request('destinations');
    const destinations = response.json();
    return destinations;
  }

  /**
 * @return {Promise<Array<OfferGroup>>}
 */
  async getOfferGroups() {
    const response = await this.request('offers');
    const offers = response.json();
    return offers;
  }
}
export default ApiService;