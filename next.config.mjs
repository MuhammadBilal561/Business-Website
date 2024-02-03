/** @type {import('next').NextConfig} */
const nextConfig = {
   
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: "tailwindui.com"
            
            },

            {
              hostname:"bootstrapmade.com"
            },
            {
              hostname :"randomuser.me"
            }
          ],
        },
      
    
};

export default nextConfig;
