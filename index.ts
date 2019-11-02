import * as awsx from "@pulumi/awsx";

// Create a load balancer to listen for requests and route them to the container.
let loadbalancer = new awsx.lb.ApplicationListener("nginx", { port: 8098, protocol: "HTTP" });

// Define the service using the example Spring Boot Vue.js app from https://github.com/jonashackt/spring-boot-vuejs
let service = new awsx.ecs.FargateService("spring-boot-vuejs", {
    taskDefinitionArgs: {
        containers: {
            nginx: {
                image: "jonashackt/spring-boot-vuejs",
                memory: 512,
                portMappings: [ loadbalancer ],
            },
        },
    },
    desiredCount: 2,
});

// Export the URL so we can easily access it.
export const url = loadbalancer.endpoint.hostname;
