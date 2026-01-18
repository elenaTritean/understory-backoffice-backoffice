export interface TopbarProps {
  /** Logo or brand name */
  logo?: React.ReactNode;
  /** Navigation items or menu */
  navigation?: React.ReactNode;
  /** Actions (buttons, user menu, etc.) */
  actions?: React.ReactNode;
  /** Fixed position at top */
  fixed?: boolean;
}

/** Topbar component for navigation and actions */
export const Topbar = ({
  logo,
  navigation,
  actions,
  fixed = false,
}: TopbarProps) => {
  const fixedClass = fixed ? 'topbar--fixed' : '';

  return (
    <header className={['topbar', fixedClass].filter(Boolean).join(' ')}>
      <div className="topbar-container">
        {logo && <div className="topbar-logo">{logo}</div>}
        {navigation && <nav className="topbar-navigation">{navigation}</nav>}
        {actions && <div className="topbar-actions">{actions}</div>}
      </div>
    </header>
  );
};
