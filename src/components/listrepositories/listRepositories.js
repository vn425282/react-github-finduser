import React from 'react';
import './listRepositories.scss';

function ListRepositories (props) {
  return (
    <>
      <ul className="repo-list">
        <li className="repo-list-item hx_hit-repo d-flex flex-justify-start py-4 public source">
          <div className="flex-shrink-0 mr-2">
            <svg height="16" className="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
              <path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z" /></svg>
          </div>
          <div className="mt-n1">
            <div className="f4 text-normal">
              <a className="v-align-middle" data-hydro-click="{&quot;event_type&quot;:&quot;search_result.click&quot;,&quot;payload&quot;:{&quot;page_number&quot;:1,&quot;per_page&quot;:10,&quot;query&quot;:&quot;react&quot;,&quot;result_position&quot;:1,&quot;click_id&quot;:10270250,&quot;result&quot;:{&quot;id&quot;:10270250,&quot;global_relay_id&quot;:&quot;MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==&quot;,&quot;model_name&quot;:&quot;Repository&quot;,&quot;url&quot;:&quot;https://github.com/facebook/react&quot;},&quot;client_id&quot;:&quot;1932414186.1568111022&quot;,&quot;originating_request_id&quot;:&quot;CBBA:7E87:AA32F9:EC807A:5DEDD5C8&quot;,&quot;originating_url&quot;:&quot;https://github.com/search?q=react&quot;,&quot;referrer&quot;:&quot;https://github.com/search?q=vue.js&quot;,&quot;user_id&quot;:5286586}}" data-hydro-click-hmac="5ff73641433030f919378ae24d4b0fecb20afec38a3f60d0eb51953362e8fbdf" href="/facebook/react">facebook/<em>react</em></a>
            </div>
            <p className="mb-1">
              A declarative, efficient, and flexible JavaScript library for building user interfaces.
          </p>
            <div>
              <div>
                <a className="topic-tag topic-tag-link f6 px-2" href="/topics/react" title="Topic: react" data-ga-click="Topic, search results" data-octo-click="topic_click" data-octo-dimensions="topic:react,repository_id:10270250,repository_nwo:facebook/&lt;em&gt;react&lt;/em&gt;,repository_public:true,repository_is_fork:false">
                  react
              </a>
                <a className="topic-tag topic-tag-link f6 px-2" href="/topics/javascript" title="Topic: javascript" data-ga-click="Topic, search results" data-octo-click="topic_click" data-octo-dimensions="topic:javascript,repository_id:10270250,repository_nwo:facebook/&lt;em&gt;react&lt;/em&gt;,repository_public:true,repository_is_fork:false">
                  javascript
              </a>
                <a className="topic-tag topic-tag-link f6 px-2" href="/topics/library" title="Topic: library" data-ga-click="Topic, search results" data-octo-click="topic_click" data-octo-dimensions="topic:library,repository_id:10270250,repository_nwo:facebook/&lt;em&gt;react&lt;/em&gt;,repository_public:true,repository_is_fork:false">
                  library
              </a>
                <a className="topic-tag topic-tag-link f6 px-2" href="/topics/ui" title="Topic: ui" data-ga-click="Topic, search results" data-octo-click="topic_click" data-octo-dimensions="topic:ui,repository_id:10270250,repository_nwo:facebook/&lt;em&gt;react&lt;/em&gt;,repository_public:true,repository_is_fork:false">
                  ui
              </a>
                <a className="topic-tag topic-tag-link f6 px-2" href="/topics/frontend" title="Topic: frontend" data-ga-click="Topic, search results" data-octo-click="topic_click" data-octo-dimensions="topic:frontend,repository_id:10270250,repository_nwo:facebook/&lt;em&gt;react&lt;/em&gt;,repository_public:true,repository_is_fork:false">
                  frontend
              </a>
                <a className="topic-tag topic-tag-link f6 px-2" href="/topics/declarative" title="Topic: declarative" data-ga-click="Topic, search results" data-octo-click="topic_click" data-octo-dimensions="topic:declarative,repository_id:10270250,repository_nwo:facebook/&lt;em&gt;react&lt;/em&gt;,repository_public:true,repository_is_fork:false">
                  declarative
              </a>
              </div>
              <div className="d-flex flex-wrap text-small text-gray">
                <div className="mr-3">
                  <a className="muted-link" href="/facebook/react/stargazers">
                    <svg aria-label="star" className="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img">
                      <path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z" /></svg>
                    141k
                </a>
                </div>
                <div className="mr-3">
                  <span>
                    <span className="repo-language-color"></span>
                    <span>JavaScript</span>
                  </span>
                </div>
                <div className="mr-3">
                  MIT license
               </div>
                <div className="mr-3">
                  Updated <relative-time datetime="2019-12-09T00:28:01Z" className="no-wrap">Dec 9, 2019</relative-time>
                </div>
                <a className="muted-link f6" href="/facebook/react/issues?q=label%3A%22good+first+issue%22+is%3Aissue+is%3Aopen">
                  4 issues
                need help</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <nav aria-label="page navigation" className="pt-3">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </>
  );
}

export default ListRepositories;
