interface DashboardTitleBoxProps {
  title: string;
}

const DashboardTitleBox = ({ title }: DashboardTitleBoxProps) => {
  return (
    <div className="dashboardTitleBoxWrapper">
      <span className="dashboardTitleBoxTitle">{title}</span>
    </div>
  );
};

export { DashboardTitleBox };
