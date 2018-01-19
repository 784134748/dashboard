// Copyright 2017 The Kubernetes Authors.
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

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CsrfToken} from '@api/backendapi';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CsrfTokenService {
  constructor(private http_: HttpClient) {}

  /** Get a CSRF token for an action you want to perform. */
  getTokenForAction(action: string): Observable<CsrfToken> {
    return this.http_.get<CsrfToken>(`api/v1/csrftoken/${action}`);
  }
}