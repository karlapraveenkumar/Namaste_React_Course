# Youtube Clone

    - Head
    - Body
        - Sidebar
            - Menu Items
        - MainContainer
            - Buttons List
            - VideoContainer
                - VideoCard

    - Debouncing

        - Typing Slow = 200ms (difference between each character)
        - Typing Fast = 30ms

        - Performance

            - iphone pro max = 14 letters (each character - one api calss) * 1000 (if 1000 people search this at a time) = 14000 api calls made

            - with debouncing =  3 api calls * 1000 = 3000 api calls made

        - Debouncing with 200 ms
            - If difference between 2 key strokes is <200ms - Decline API call
            - If >200 ms - Make API call

        - Key entered - i
            - Rendered the component
            - useEffect(); called
            - Timer started => make api call after 200 ms

        - Key entered - ip
            - Destroy the component (useEffec return method)
            - re-rendered the component
            - useEffect(); called
            - Timer started => make api call after 200 ms                  