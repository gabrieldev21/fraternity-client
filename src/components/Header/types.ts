export interface IHeader {
  userHeader: userProps;
  url: string;
  onLogout: () => void;
  isScrolled: boolean;
}

interface userProps {
  name: string;
  role: string;
}
