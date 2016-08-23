// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {stateName as configMapState} from 'configmaplist/configmaplist_state';
import {stateName as daemonSetState} from 'daemonsetlist/daemonsetlist_state';
import {stateName as deploymentState} from 'deploymentlist/deploymentlist_state';
import {stateName as jobState} from 'joblist/joblist_state';
import {stateName as namespaceState} from 'namespacelist/namespacelist_state';
import {stateName as nodeState} from 'nodelist/nodelist_state';
import {stateName as petSetState} from 'petsetlist/petsetlist_state';
import {stateName as podState} from 'podlist/podlist_state';
import {stateName as replicaSetState} from 'replicasetlist/replicasetlist_state';
import {stateName as replicationControllerState} from 'replicationcontrollerlist/replicationcontrollerlist_state';
import {stateName as secretState} from 'secretlist/list_state';
import {stateName as serviceState} from 'servicelist/servicelist_state';
import {stateName as workloadState} from 'workloads/workloads_state';

/**
 * @final
 */
export class NavController {
  /**
   * @param {!./nav_service.NavService} kdNavService
   * @ngInject
   */
  constructor(kdNavService) {
    /** @export {boolean} */
    this.isVisible = true;

    /** @private {!./nav_service.NavService} */
    this.kdNavService_ = kdNavService;

    /** @export {!Object<string, string>} */
    this.states = {
      'namespace': namespaceState,
      'node': nodeState,
      'workload': workloadState,
      'pod': podState,
      'deployment': deploymentState,
      'replicaSet': replicaSetState,
      'replicationController': replicationControllerState,
      'daemonSet': daemonSetState,
      'petSet': petSetState,
      'job': jobState,
      'service': serviceState,
      'secret': secretState,
      'configMap': configMapState,
    };
  }

  /** @export */
  $onInit() { this.kdNavService_.registerNav(this); }

  /**
   * Toggles visibility of the navigation component.
   */
  toggle() { this.isVisible = !this.isVisible; }
}

/**
 * @type {!angular.Component}
 */
export const navComponent = {
  controller: NavController,
  templateUrl: 'chrome/nav/nav.html',
};