import { SidebarProps } from "../models/sidebar-props.interface";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { DiAtom } from "react-icons/di";
import { RiDashboardFill } from "react-icons/ri";
import { menuItems } from "./NavData";

export function Sidebar({ open, setOpen }: SidebarProps) {
  const changeSideButton = () => {
    setOpen(!open);
  };

  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <Container>
      <div className="container">
        <div className={!open ? "back-screen active" : "back-screen"}>
          <BsArrowLeftShort
            className={!open ? "bg-icon rotate" : "bg-icon"}
            onClick={changeSideButton}
          />
          <div className="logo">
            <DiAtom className={!open ? "logo-icon size" : "logo-icon"} />
            <h1 className={!open ? "logo-text scale" : "logo-text"}>SysLab</h1>
          </div>
          <ul className="menu">
            {menuItems.map((menu, index) => (
              <li key={index} className="decoration">
                <NavLink
                  to={menu.path}
                  className={`menuItems ${
                    menu.spacing ? "spacingLg" : "spacingMd"
                  }`}
                >
                  <span className="menuIcon">
                    {menu.icon ? menu.icon : <RiDashboardFill />}
                  </span>
                  <span className={!open ? "menuLabel hidden" : "menuLabel"}>
                    {menu.label}
                  </span>
                  {menu.submenu && open && (
                    <BsChevronDown
                      className={
                        subMenuOpen ? "dropdown rotate-180" : "dropdown"
                      }
                      onClick={() => setSubMenuOpen(!subMenuOpen)}
                    />
                  )}
                </NavLink>
                {menu.submenu && subMenuOpen && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <NavLink
                        to={submenuItem.path}
                        key={index}
                        className="menuItems submenu"
                      >
                        <span className="menuIcon submenu">
                          {submenuItem.icon ? (
                            submenuItem.icon
                          ) : (
                            <RiDashboardFill />
                          )}
                        </span>
                        {submenuItem.label}
                      </NavLink>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export const Container = styled.div`
  .container {
    grid-template-columns: 288px auto;
    .back-screen {
      background-color: #171d29;
      height: 100vh;
      padding: 1.25rem;
      padding-top: 2rem;
      width: 18rem;
      position: relative;
      transition-duration: 300ms;

      &.active {
        width: 5rem;
      }

      .bg-icon {
        background-color: #ffffff;
        color: #171d29;
        font-size: 1.5rem;
        border-radius: 100%;
        position: absolute;
        right: -12px;
        top: 2.5rem;
        border: 1px solid #171d29;
        cursor: pointer;

        &.rotate {
          transform: rotate(180deg);
        }
      }

      .logo {
        display: inline-flex;
        .logo-icon {
          background-color: #6a28cb;
          color: #ffffff;
          font-size: 2.5rem;
          cursor: pointer;
          display: block;
          float: left;
          margin-right: 0.5rem;
          border-radius: 10px;
          &.size {
            font-size: 2.5rem;
          }
        }
        .logo-text {
          color: #ffffff;
          transform-origin: left;
          font-weight: 500;
          font-size: 1.5rem;
          transition-duration: 300ms;

          &.scale {
            transform: scale(0);
          }
        }
      }

      .menu {
        padding-top: 0.5rem;
        list-style: none;
        .decoration {
          text-decoration: none;
        }
        .menuItems {
          color: #d1d5db;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          padding: 0.1rem;
          border-radius: 0.375rem;
          text-decoration: none;

          &.spacingLg {
            margin-top: 1.5rem;
          }
          &.spacingMd {
            margin-top: 0.5rem;
          }
          &:hover {
            background-color: #6a28cb;
          }
          .menuIcon {
            font-size: 24px;
            display: block;
            float: left;
            padding-top: 0.4rem;
            padding-left: 0.4rem;
            &.submenu {
              font-size: 14px;
            }
          }
          .menuLabel {
            font-size: 15px;
            font-weight: 500;
            flex: 1;
            transition-duration: 200ms;
            &.hidden {
              display: none;
            }
          }
          .dropdown {
            margin-right: 0.5rem;
            &.rotate-180 {
              transform: rotate(180deg);
              transition-duration: 500ms;
            }
          }

          &.submenu {
            padding-left: 3rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
        }
      }
    }
  }
`;
