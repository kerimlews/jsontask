import { memo } from 'react';
import { NavLink as Link, NavLinkProps } from 'react-router-dom';

const NavLink = (props: NavLinkProps) => (
    <Link
        className={({ isActive, isPending }) =>
            isActive
            ? "active"
            : isPending
            ? "pending"
            : ""
        }
        {...props}
    >
        {props.children}
    </Link>
)

export default memo(NavLink);
