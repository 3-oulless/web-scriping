import { BackendAsServiceSdk } from 'backend-as-service-sdk';

(async () => {
  const backendAsServiceSdk = new BackendAsServiceSdk({
    token: 'YOUR_TOKEN',
  });

  const data = await backendAsServiceSdk.backendAsServiceSdk.logout();

  console.log(data);
})();
