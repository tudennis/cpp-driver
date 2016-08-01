/*
  Copyright (c) 2014-2016 DataStax

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

#include "list_policy.hpp"

#include "logger.hpp"

namespace cass {

void ListPolicy::init(const SharedRefPtr<Host>& connected_host,
                      const HostMap& hosts,
                      Random* random) {
  HostMap valid_hosts;
  for (HostMap::const_iterator i = hosts.begin(),
    end = hosts.end(); i != end; ++i) {
    const SharedRefPtr<Host>& host = i->second;
    if (is_valid_host(host)) {
      valid_hosts.insert(HostPair(i->first, host));
    }
  }

  if (valid_hosts.empty()) {
    LOG_ERROR("No valid hosts available for list policy");
  }

  ChainedLoadBalancingPolicy::init(connected_host, hosts, random);
}

CassHostDistance ListPolicy::distance(const SharedRefPtr<Host>& host) const {
  if (is_valid_host(host)) {
    return child_policy_->distance(host);
  }
  return CASS_HOST_DISTANCE_IGNORE;
}

QueryPlan* ListPolicy::new_query_plan(const std::string& connected_keyspace,
                                      const Request* request,
                                      const TokenMap& token_map,
                                      Request::EncodingCache* cache) {
  return child_policy_->new_query_plan(connected_keyspace,
                                       request,
                                       token_map,
                                       cache);
}

void ListPolicy::on_add(const SharedRefPtr<Host>& host) {
  if (is_valid_host(host)) {
    child_policy_->on_add(host);
  }
}

void ListPolicy::on_remove(const SharedRefPtr<Host>& host) {
  if (is_valid_host(host)) {
    child_policy_->on_remove(host);
  }
}

void ListPolicy::on_up(const SharedRefPtr<Host>& host) {
  if (is_valid_host(host)) {
    child_policy_->on_up(host);
  }
}

void ListPolicy::on_down(const SharedRefPtr<Host>& host) {
  if (is_valid_host(host)) {
    child_policy_->on_down(host);
  }
}

} // namespace cass
