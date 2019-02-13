next build
next export
aws s3 sync ./out s3://www.stephyang.com --profile personal
aws cloudfront create-invalidation --profile personal --distribution-id E31ATL459PR1BB --paths "/*"