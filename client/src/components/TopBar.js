// client/src/components/TopBar.js
import React from "react";
import "./TopBar.css";

function TopBar({ currentUser, notificationsCount = 1 }) {
  const hasUser = !!currentUser;

  const roleLabel =
    currentUser?.role === "teacher"
      ? "Преподаватель"
      : currentUser?.role === "student"
      ? "Студент"
      : "";

  return (
    <header className="topbar-root">
      <div className="topbar-left">
        <div className="topbar-logo">PSB Campus</div>
        <div className="topbar-subtitle">
          Единая среда для обучения и контроля прогресса
        </div>
      </div>

      {hasUser && (
        <div className="topbar-right">
          <button className="topbar-bell" type="button">
            <span className="topbar-bell-circle">
              <span className="topbar-bell-emoji">🔔</span>
            </span>
            {notificationsCount > 0 && (
              <span className="topbar-badge">{notificationsCount}</span>
            )}
          </button>

          <div className="topbar-user-pill">
            <span className="topbar-user-name">
              {currentUser?.name || "Пользователь"}
            </span>
            {roleLabel && (
              <span className="topbar-role-chip">{roleLabel}</span>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default TopBar;
