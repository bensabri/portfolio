// declare namespace NodeJS {
// 	interface ProcessEnv {
// 		//types of envs
// 		SERVICE_ID: string;
// 		TEMPLATE_ID: string;
// 		PUBLIC_KEY: string;
// 	}
// }
export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			SERVICE_ID: string;
			TEMPLATE_ID: string;
			PUBLIC_KEY: string;
			ENV: 'test' | 'dev' | 'prod';
		}
	}
}
