# pulumi-javascript-aws-fargate
Example project showing how to run Dockerized spring-boot-vuejs with Pulumi on AWS Fargate based on AWS ECS

There's some confusion about AWS ECS, EKS & Fargate - try to [read posts like this](https://cloudonaut.io/ecs-vs-fargate-whats-the-difference/).

The first contact with AWS Fargate is the AWS ECS console - access it via https://eu-central-1.console.aws.amazon.com/ecs/home?region=eu-central-1#/firstRun There's also a nice overview picture waiting:

![aws-ecs-fargate-console](screenshots/aws-ecs-fargate-console.png)

Pulumi also provides an example tutorial:

https://www.pulumi.com/docs/tutorials/aws/ecs-fargate/