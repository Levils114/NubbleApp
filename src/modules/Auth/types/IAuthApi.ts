export interface IAuthApi {
  auth: {
    type: string;
    token: string;
  };
  user: {
    id: number; // 1;
    first_name: string; //'Maria';
    last_name: string; //'Julia';
    username: string; //'mariajulia';
    email: string; //'mariajulia@coffstack.com';
    temp_token: null;
    remember_me_token: null;
    profile_url: string; //'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png';
    is_online: boolean; //false;
    temp_token_created_at: null;
    remember_me_token_created_at: null;
    full_name: string; //'Maria Julia';
  };
}
