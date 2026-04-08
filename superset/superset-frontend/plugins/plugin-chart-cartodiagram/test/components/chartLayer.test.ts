/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { ChartLayer } from '../../src/components/ChartLayer';
import { ChartLayerOptions } from '../../src/types';

describe('ChartLayer', () => {
  test('creates div and loading mask', () => {
    const options: ChartLayerOptions = {
      chartVizType: 'pie',
      locale: 'en',
    };
    const chartLayer = new ChartLayer(options);

    expect(chartLayer.loadingMask).toBeDefined();
    expect(chartLayer.div).toBeDefined();
  });

<<<<<<< HEAD:superset-frontend/plugins/plugin-chart-cartodiagram/test/components/chartLayer.test.ts
  test('can remove chart elements', () => {
    const options: ChartLayerOptions = {
      chartVizType: 'pie',
      locale: 'en',
    };
    const chartLayer = new ChartLayer(options);
    chartLayer.charts = [
      {
        htmlElement: document.createElement('div'),
      },
    ];

    chartLayer.removeAllChartElements();
    expect(chartLayer.charts).toEqual([]);
=======
  it('should load report lists', () => {
    cy.getBySel('listview-table').should('be.visible');
    cy.getBySel('sort-header').eq(1).contains('Last run');
    cy.getBySel('sort-header').eq(2).contains('Name');
    cy.getBySel('sort-header').eq(3).contains('Schedule');
    cy.getBySel('sort-header').eq(4).contains('Notification method');
    cy.getBySel('sort-header').eq(5).contains('Owners');
    cy.getBySel('sort-header').eq(6).contains('Last modified');
    cy.getBySel('sort-header').eq(7).contains('Active');
    // TODO Cypress won't recognize the Actions column
    // cy.getBySel('sort-header').eq(9).contains('Actions');
>>>>>>> my-branch:superset-frontend/cypress-base/cypress/e2e/alerts_and_reports/reports.test.ts
  });
});
