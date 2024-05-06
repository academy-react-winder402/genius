interface DashboardInformationBoxProps {
  label: string;
  value: string;
}

const DashboardInformationBox = ({
  label,
  value,
}: DashboardInformationBoxProps) => {
  return (
    <div>
      <span className="dashboardInformationBoxLabel">{label}</span>
      <span className="dashboardInformationBoxValue">{value}</span>
    </div>
  );
};

export { DashboardInformationBox };
