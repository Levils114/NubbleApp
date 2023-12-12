export interface IAuthCredentials {
  token: string;
  tokenExpiresAt: string;
  refreshToken: string;
  user: {
    id: number; // 1;
    firstName: string; //'Maria';
    lastName: string; //'Julia';
    username: string; //'mariajulia';
    email: string; //'mariajulia@coffstack.com';
    tempToken: null;
    rememberMeToken: null;
    profileUrl: string; //'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png';
    isOnline: boolean; //false;
    tempTokenCreatedAt: null;
    rememberMeTokenCreatedAt: null;
    fullName: string; //'Maria Julia';
  };
}
