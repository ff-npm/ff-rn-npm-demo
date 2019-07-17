package com.qrcodetest;

import android.os.Bundle;
import android.util.Log;
import android.view.View;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactInstanceManagerBuilder;
import com.facebook.react.ReactRootView;
import com.qrcodetest.balls.BallOnclickLister;
import com.qrcodetest.balls.ShowFloatBall;
import com.qrcodetest.balls.ViewManager;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "qrcodeTest";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }


    ViewManager mViewManager;
    ReactInstanceManager reactInstanceManager;
    ReactInstanceManagerBuilder reactInstanceManagerBuilder;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        reactInstanceManager = ((MainApplication) getApplication()).getReactNativeHost().getReactInstanceManager();
        reactInstanceManagerBuilder = reactInstanceManager.builder();
        reactInstanceManagerBuilder.setUseDeveloperSupport(true);
        reactInstanceManagerBuilder.setCurrentActivity(this);
        mViewManager = ViewManager.getInstance(MainActivity.this);
        if (true) {
            mViewManager.showFloatBall();
            mViewManager.onBallClicked(new BallOnclickLister() {
                @Override
                public void onballclick(View view) {
                    reactInstanceManager.showDevOptionsDialog();
                }

                @Override
                public void onballLongclick(View view) {

                }
            });
        }

    }

}
