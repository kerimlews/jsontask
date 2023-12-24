import { Form, Outlet, useNavigation, useSubmit, useLocation } from 'react-router-dom';
import NavLink from '../NavLink';
import { debounce, getUrlParam } from '../../misc/utils';
import { useEffect } from 'react';

let controller: AbortController | undefined;
export let signal: AbortController['signal'];

const Layout = () => {  
  const submit = useSubmit();
  const navigation = useNavigation();
  const q = getUrlParam('q');
  const location = useLocation();
    
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q');
  
  // Sync input and param
  useEffect(() => {
    const element = document?.getElementById('q') as HTMLInputElement;
    if (element) element.value = q;
  }, [q]);
  
  const searchPosts = debounce((event: React.ChangeEvent<HTMLInputElement>) => {    
    if (controller) {
        controller.abort();
      }
      controller = new AbortController()
      signal = controller.signal
      const isFirstSearch = q == null;
      // Manage history stack
      submit(event.target.form, {
        replace: !isFirstSearch,
      });
  }, 200);

  return (
    <>
    <div id="sidebar">
      <h1>Logo</h1>
      {!location?.state?.hideSearch && <div>
        <Form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search posts by user name"
            placeholder="Search posts by user name"
            type="search"
            name="q"
            className={searching ? "loading" : ""}
            defaultValue={q}
            onChange={searchPosts}
          />
          {searching && 'Loading'}
          <div
            className="sr-only"
            aria-live="polite"
          ></div>
        </Form>
      </div>}
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to="/photos" state={{ hideSearch: true }}>
              Photos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <div id="detail">
      <Outlet />
    </div>
    <div className="footer">
        Footer
    </div>
  </>
  )
}

export default Layout;
